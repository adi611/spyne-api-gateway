import express from "express";
import proxy from "express-http-proxy";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

const userServiceProxy = proxy(`${process.env.USER_SERVICE_ENDPOINT}`, {
  proxyReqPathResolver: (req) => `/api/users${req.url}`,
});
const discussionServiceProxy = proxy(
  `${process.env.DISCUSSION_SERVICE_ENDPOINT}`,
  {
    proxyReqPathResolver: (req) => `/api/discussions${req.url}`,
  }
);
const commentServiceProxy = proxy(`${process.env.COMMENT_SERVICE_ENDPOINT}`, {
  proxyReqPathResolver: (req) => `/api/comments${req.url}`,
});

router.use("/users", userServiceProxy);
router.use("/discussions", discussionServiceProxy);
router.use("/comments", commentServiceProxy);

export default router;
