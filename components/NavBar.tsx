import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav className="nav">
      <img src="/jenkinsxdocker.png" alt="Vercel Logo" />
      <div>
        <Link href="/" legacyBehavior>
          <div className={router.pathname === "/" ? "active" : "btn"}>main</div>
        </Link>
      </div>
      <div>
        <Link href="/about" legacyBehavior>
          <div className={router.pathname === "/about" ? "active" : "btn"}>
            About
          </div>
        </Link>
      </div>
      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow:
            rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        img {
          max-width: 200px;
          margin-bottom: 5px;
        }
        nav a {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: tomato;
        }
        .btn {
          cursor: pointer;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
      `}</style>
    </nav>
  );
}
