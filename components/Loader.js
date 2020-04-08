const Loader = () => (
  <div className="loader">
    {[...Array(4).keys()].map(i => <div key={i}/>)}
    <style jsx>{`
      .loader {
        display: inline-block;
        position: relative;
        width: 60px;
        height: 60px;
      }
      .loader div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 48px;
        height: 48px;
        margin: 6px;
        border: 6px solid #1890ff;
        border-radius: 50%;
        animation: loading 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #1890ff transparent transparent transparent;
      }
      .loader div:nth-child(1) {
        animation-delay: -0.45s;
      }
      .loader div:nth-child(2) {
        animation-delay: -0.3s;
      }
      .loader div:nth-child(3) {
        animation-delay: -0.15s;
      }
      @keyframes loading {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

    `}</style>
  </div>
)

export default Loader;