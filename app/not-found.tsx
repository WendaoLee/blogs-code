
export default function NotFound() {
  return (
      <div className="flex h-full flex-col justify-center items-center">
        <h1 className="font-bold text-xl">Ops~ 404 - Page Not Found</h1>
        <p> 完蛋噜，页面找不到了</p>
        <div className="divider"></div>
        <img src="/404-rabbit.webp"></img>
        <div className="divider"></div>
        <p>但是不用紧张，你还可以看看这只可爱的小兔子。</p>
        <p>这是我画的。如果你觉得它有什么可以修改的地方，可以在 Contact 里和我联系，顺带反馈一下你是在访问什么页面时出现了这个问题。</p>
      </div>
  );
}
