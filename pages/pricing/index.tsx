import styles from "../../styles/About.module.css";
import Link from "next/link";
import { MainLayouts } from "../../Components/layouts/MainLayouts";


export default function pricing() {
    return (
        <>
          <MainLayouts>
            <div className={styles.description}>
              <p>
                Ir a<Link href="/">Home</Link>
              </p>
              <p>
                Ir a<Link href="/about">About</Link>
              </p>
            </div>
          </MainLayouts>
        </>
      );
}
