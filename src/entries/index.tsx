/*
 * @Author: h-yw 1327603193@qq.com
 * @Date: 2024-09-14 12:46:01
 * @LastEditTime: 2024-09-14 12:48:07
 * @Github: https://github.com/h-yw
 * @Blog: https://hlovez.life
 * @Description: 
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Index from "./index/index";

const root = document.getElementById("root")!;
createRoot(root).render(
  <StrictMode>
    <Index/>
  </StrictMode>
);
