(()=>{"use strict";function e(){let e=document.querySelector(".images"),t=document.querySelector(".container"),l=Number(t.dataset.image);for(l-=1;l<0;)l+=10;l%=10,e.style.left=`calc(-${l} * (2rem + 228px))`,t.dataset.image=l}function t(){let e=document.querySelector(".images"),t=document.querySelector(".container"),l=Number(t.dataset.image);l=(l+1)%10,e.style.left=`calc(-${l} * (2rem + 228px))`,t.dataset.image=l}function l(e){document.querySelectorAll(".jumpBtn").forEach((e=>{e.style.scale="1",e.style.backgroundColor="white"}));let t=e.target.dataset.image,l=document.querySelector(".images"),a=document.querySelector(".container");l.style.left=`calc(-${t} * (2rem + 228px))`,a.dataset.image=t,e.target.style.backgroundColor="grey",e.target.style.scale="1.2"}!function(){let a=document.querySelector("body"),n=document.createElement("div");n.classList.add("container"),n.style.position="absolute",n.style.top="9rem",n.style.left="calc(2rem + 224px)",n.style.minWidth="calc(2rem + 228px)",n.style.minHeight="calc(2rem + 228px)",n.style.border="2px solid green";let s=document.createElement("div");s.classList.add("images"),s.style.display="flex";for(let e=0;e<10;e++){let t=document.createElement("img");t.setAttribute("alt",`img${e}`),t.setAttribute("src",""),t.style.marginRight="1rem",t.style.marginLeft="1rem",t.style.minHeight="224px",t.style.minWidth="224px",t.style.border="2px solid red",s.appendChild(t)}s.style.position="absolute",s.style.top="1rem",n.appendChild(s),n.setAttribute("data-image","0"),a.appendChild(n);let i=document.createElement("div");i.style.display="flex",i.style.justifyContent="space-around";let r=document.createElement("button");r.textContent="Previous",r.addEventListener("click",e);let d=document.createElement("button");d.textContent="Next",d.addEventListener("click",t);let o=document.createElement("div");o.classList.add("jump"),o.style.position="absolute",o.style.display="flex",o.style.justifyContent="space-around";for(let e=0;e<10;e++){let t=document.createElement("button");t.classList.add("jumpBtn"),t.setAttribute("data-image",`${e}`),t.addEventListener("click",l),t.style.color="white",t.style.borderRadius="50%",t.style.border="2px solid black",t.style.backgroundColor="white",t.style.marginRight="0.5rem",t.style.minHeight="1rem",o.appendChild(t)}i.appendChild(r),i.appendChild(d),a.appendChild(i),a.appendChild(o)}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN6QmtCLEVBQVFoQyxNQUFNbUIsUUFBVSxPQUN4QmEsRUFBUWhDLE1BQU0yQixlQUFpQixlQUMvQixJQUFLLElBQUlQLEVBQUksRUFBR0EsRUFBSSxHQUFJQSxJQUFLLENBQzNCLElBQUlhLEVBQVV4QyxTQUFTa0IsY0FBYyxVQUNyQ3NCLEVBQVFyQixVQUFVQyxJQUFJLFdBQ3RCb0IsRUFBUVgsYUFBYSxhQUFjLEdBQUdGLEtBQ3RDYSxFQUFRSCxpQkFBaUIsUUFBUzNCLEdBQ2xDOEIsRUFBUWpDLE1BQU1rQyxNQUFRLFFBQ3RCRCxFQUFRakMsTUFBTW1DLGFBQWUsTUFDN0JGLEVBQVFqQyxNQUFNa0IsT0FBUyxrQkFDdkJlLEVBQVFqQyxNQUFNUSxnQkFBa0IsUUFDaEN5QixFQUFRakMsTUFBTXVCLFlBQWMsU0FDNUJVLEVBQVFqQyxNQUFNaUIsVUFBWSxPQUMxQmUsRUFBUVAsWUFBWVEsRUFDdEIsQ0FDQVAsRUFBT0QsWUFBWUcsR0FDbkJGLEVBQU9ELFlBQVlNLEdBQ25CckIsRUFBU2UsWUFBWUMsR0FDckJoQixFQUFTZSxZQUFZTyxFQUN2QixDQzdGQUksRSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdWktaW50ZXJhY3Rpb24vLi9zcmMvc2xpZGVyLmpzIiwid2VicGFjazovL29kaW4tdWktaW50ZXJhY3Rpb24vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gcHJldmlvdXMoKSB7XG4gIGxldCBpbWFnZXNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmltYWdlc1wiKTtcbiAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuICBsZXQgZGlzcGxheWVkSW1hZ2UgPSBOdW1iZXIoY29udGFpbmVyLmRhdGFzZXQuaW1hZ2UpO1xuICBkaXNwbGF5ZWRJbWFnZSAtPSAxO1xuICB3aGlsZSAoZGlzcGxheWVkSW1hZ2UgPCAwKSBcbiAgICBkaXNwbGF5ZWRJbWFnZSArPSAxMDtcbiAgZGlzcGxheWVkSW1hZ2UgJT0gMTA7XG4gIGltYWdlc0Rpdi5zdHlsZS5sZWZ0ID0gYGNhbGMoLSR7ZGlzcGxheWVkSW1hZ2V9ICogKDJyZW0gKyAyMjhweCkpYDtcbiAgY29udGFpbmVyLmRhdGFzZXQuaW1hZ2UgPSBkaXNwbGF5ZWRJbWFnZTtcbn1cblxuZnVuY3Rpb24gbmV4dCgpIHtcbiAgbGV0IGltYWdlc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW1hZ2VzXCIpO1xuICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG4gIGxldCBkaXNwbGF5ZWRJbWFnZSA9IE51bWJlcihjb250YWluZXIuZGF0YXNldC5pbWFnZSk7XG4gIGRpc3BsYXllZEltYWdlID0gKGRpc3BsYXllZEltYWdlICsgMSkgJSAxMDtcbiAgaW1hZ2VzRGl2LnN0eWxlLmxlZnQgPSBgY2FsYygtJHtkaXNwbGF5ZWRJbWFnZX0gKiAoMnJlbSArIDIyOHB4KSlgO1xuICBjb250YWluZXIuZGF0YXNldC5pbWFnZSA9IGRpc3BsYXllZEltYWdlO1xufVxuXG5mdW5jdGlvbiBqdW1wVG9JbWFnZShlKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuanVtcEJ0blwiKS5mb3JFYWNoKGUgPT4ge1xuICAgIGUuc3R5bGUuc2NhbGUgPSBcIjFcIjtcbiAgICBlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgfSlcbiAgbGV0IGRpc3BsYXllZEltYWdlID0gZS50YXJnZXQuZGF0YXNldC5pbWFnZTtcbiAgbGV0IGltYWdlc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW1hZ2VzXCIpO1xuICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG4gIGltYWdlc0Rpdi5zdHlsZS5sZWZ0ID0gYGNhbGMoLSR7ZGlzcGxheWVkSW1hZ2V9ICogKDJyZW0gKyAyMjhweCkpYDtcbiAgY29udGFpbmVyLmRhdGFzZXQuaW1hZ2UgPSBkaXNwbGF5ZWRJbWFnZTtcbiAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmV5XCI7XG4gIGUudGFyZ2V0LnN0eWxlLnNjYWxlID0gXCIxLjJcIjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2xpZGVyKCkge1xuICBsZXQgYm9keUVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xuICBjb250YWluZXIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gIGNvbnRhaW5lci5zdHlsZS50b3AgPSBcIjlyZW1cIjtcbiAgY29udGFpbmVyLnN0eWxlLmxlZnQgPSBcImNhbGMoMnJlbSArIDIyNHB4KVwiO1xuICBjb250YWluZXIuc3R5bGUubWluV2lkdGggPSBcImNhbGMoMnJlbSArIDIyOHB4KVwiO1xuICBjb250YWluZXIuc3R5bGUubWluSGVpZ2h0ID0gXCJjYWxjKDJyZW0gKyAyMjhweClcIjtcbiAgY29udGFpbmVyLnN0eWxlLmJvcmRlciA9IFwiMnB4IHNvbGlkIGdyZWVuXCI7XG4gIGxldCBpbWFnZXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbWFnZXNEaXYuY2xhc3NMaXN0LmFkZChcImltYWdlc1wiKTtcbiAgaW1hZ2VzRGl2LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgbGV0IGltZ0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltZ0VsZW0uc2V0QXR0cmlidXRlKFwiYWx0XCIsIGBpbWcke2l9YCk7XG4gICAgaW1nRWxlbS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCJcIik7XG4gICAgaW1nRWxlbS5zdHlsZS5tYXJnaW5SaWdodCA9IFwiMXJlbVwiO1xuICAgIGltZ0VsZW0uc3R5bGUubWFyZ2luTGVmdCA9IFwiMXJlbVwiO1xuICAgIGltZ0VsZW0uc3R5bGUubWluSGVpZ2h0ID0gXCIyMjRweFwiO1xuICAgIGltZ0VsZW0uc3R5bGUubWluV2lkdGggPSBcIjIyNHB4XCI7XG4gICAgaW1nRWxlbS5zdHlsZS5ib3JkZXIgPSBcIjJweCBzb2xpZCByZWRcIjtcbiAgICBpbWFnZXNEaXYuYXBwZW5kQ2hpbGQoaW1nRWxlbSk7XG4gIH1cbiAgaW1hZ2VzRGl2LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICBpbWFnZXNEaXYuc3R5bGUudG9wID0gXCIxcmVtXCI7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZXNEaXYpO1xuICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiZGF0YS1pbWFnZVwiLCBcIjBcIik7XG4gIGJvZHlFbGVtLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIGxldCBidG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBidG5EaXYuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICBidG5EaXYuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcInNwYWNlLWFyb3VuZFwiO1xuICBsZXQgcHJldkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHByZXZCdG4udGV4dENvbnRlbnQgPSBcIlByZXZpb3VzXCI7XG4gIHByZXZCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHByZXZpb3VzKTtcbiAgbGV0IG5leHRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBuZXh0QnRuLnRleHRDb250ZW50ID0gXCJOZXh0XCI7XG4gIG5leHRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5leHQpO1xuICBsZXQganVtcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGp1bXBEaXYuY2xhc3NMaXN0LmFkZChcImp1bXBcIik7XG4gIGp1bXBEaXYuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gIGp1bXBEaXYuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICBqdW1wRGl2LnN0eWxlLmp1c3RpZnlDb250ZW50ID0gXCJzcGFjZS1hcm91bmRcIjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgbGV0IGp1bXBCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGp1bXBCdG4uY2xhc3NMaXN0LmFkZChcImp1bXBCdG5cIik7XG4gICAganVtcEJ0bi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWltYWdlXCIsIGAke2l9YCk7XG4gICAganVtcEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwganVtcFRvSW1hZ2UpO1xuICAgIGp1bXBCdG4uc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XG4gICAganVtcEJ0bi5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjUwJVwiO1xuICAgIGp1bXBCdG4uc3R5bGUuYm9yZGVyID0gXCIycHggc29saWQgYmxhY2tcIjtcbiAgICBqdW1wQnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICBqdW1wQnRuLnN0eWxlLm1hcmdpblJpZ2h0ID0gXCIwLjVyZW1cIjtcbiAgICBqdW1wQnRuLnN0eWxlLm1pbkhlaWdodCA9IFwiMXJlbVwiO1xuICAgIGp1bXBEaXYuYXBwZW5kQ2hpbGQoanVtcEJ0bik7XG4gIH1cbiAgYnRuRGl2LmFwcGVuZENoaWxkKHByZXZCdG4pO1xuICBidG5EaXYuYXBwZW5kQ2hpbGQobmV4dEJ0bik7XG4gIGJvZHlFbGVtLmFwcGVuZENoaWxkKGJ0bkRpdik7XG4gIGJvZHlFbGVtLmFwcGVuZENoaWxkKGp1bXBEaXYpO1xufVxuXG5leHBvcnQge2NyZWF0ZVNsaWRlcn07IiwiaW1wb3J0IHtjcmVhdGVTbGlkZXJ9IGZyb20gXCIuL3NsaWRlci5qc1wiO1xuXG5jcmVhdGVTbGlkZXIoKTsiXSwibmFtZXMiOlsicHJldmlvdXMiLCJpbWFnZXNEaXYiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250YWluZXIiLCJkaXNwbGF5ZWRJbWFnZSIsIk51bWJlciIsImRhdGFzZXQiLCJpbWFnZSIsInN0eWxlIiwibGVmdCIsIm5leHQiLCJqdW1wVG9JbWFnZSIsImUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInNjYWxlIiwiYmFja2dyb3VuZENvbG9yIiwidGFyZ2V0IiwiYm9keUVsZW0iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwicG9zaXRpb24iLCJ0b3AiLCJtaW5XaWR0aCIsIm1pbkhlaWdodCIsImJvcmRlciIsImRpc3BsYXkiLCJpIiwiaW1nRWxlbSIsInNldEF0dHJpYnV0ZSIsIm1hcmdpblJpZ2h0IiwibWFyZ2luTGVmdCIsImFwcGVuZENoaWxkIiwiYnRuRGl2IiwianVzdGlmeUNvbnRlbnQiLCJwcmV2QnRuIiwidGV4dENvbnRlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwibmV4dEJ0biIsImp1bXBEaXYiLCJqdW1wQnRuIiwiY29sb3IiLCJib3JkZXJSYWRpdXMiLCJjcmVhdGVTbGlkZXIiXSwic291cmNlUm9vdCI6IiJ9