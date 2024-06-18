import express from "express";
import proxy from "express-http-proxy";

const router = express.Router();

const userServiceProxy = proxy("http://localhost:5000", {
  proxyReqPathResolver: (req) => `/api/users${req.url}`,
});
const discussionServiceProxy = proxy("http://localhost:5001", {
  proxyReqPathResolver: (req) => `/api/discussions${req.url}`,
});
const commentServiceProxy = proxy("http://localhost:5002", {
  proxyReqPathResolver: (req) => `/api/comments${req.url}`,
});

router.use("/users", userServiceProxy);
router.use("/discussions", discussionServiceProxy);
router.use("/comments", commentServiceProxy);

export default router;
