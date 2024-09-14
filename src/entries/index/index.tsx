/*
 * @Author: h-yw 1327603193@qq.com
 * @Date: 2024-09-14 12:45:25
 * @LastEditTime: 2024-09-14 13:33:29
 * @Github: https://github.com/h-yw
 * @Blog: https://hlovez.life
 * @Description:
 */
import { useState } from "react";
import "./index.css";
function Index() {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <h1>Vite多页面应用模板</h1>
      <p>Vite + React + Typescript</p>
      <p
        style={{
          fontSize: "2rem",
          margin: "8px 0",
        }}
      >
        {count}
      </p>

      <button onClick={() => setCount(count + 1)}>👍</button>
    </div>
  );
}

export default Index;
