import { GitHubLogoIcon } from "@radix-ui/react-icons";
import ThemeSwitch from "./ThemeSwitch";
import Link from "next/link";

export default function Header() {
    return(
        <header>
            <h1>Tasks</h1>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '8px'}}>
                <Link 
                    href="https://github.com/jcplbr/tasks"
                    target="_blank"
                    rel="no-referrer"
                    className="btn-theme"
                >
                    <GitHubLogoIcon className="theme-menu-icon" />
                </Link>
                <ThemeSwitch />
            </div>
        </header>
    )
}