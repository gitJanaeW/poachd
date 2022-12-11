export default function Footer() {
    return(
        <footer className="footer footer-center p-5 bg-base-200 text-base-content rounded bg-grey-223">
      <div className="flex flex-row items-center justify-center space-x-20">
        <a href="/home" className="link link-hover">
          Home
        </a>
        <a href="/search" className="link link-hover">
          Find A Recipe
        </a>
        <a href="/subscriptions" className="link link-hover">
          Subscriptions
        </a>
      </div>
      <div className="text-center mt-4">
        <p>Copyright &copy;2022 Poachd Powered by gitJanaeW</p>
      </div>
    </footer>
    );
}