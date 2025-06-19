import { createProxyMiddleware } from 'http-proxy-middleware';

export const createServiceProxy = (path, target) =>
  createProxyMiddleware({
    target,
    changeOrigin: true,
    onProxyReq: (proxyReq, req) => {
      if (req.headers.authorization) {
        proxyReq.setHeader('Authorization', req.headers.authorization);
      }
    }
  });
