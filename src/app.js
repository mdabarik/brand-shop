// localStorage.setItem("theme", "light");
export const currTheme = localStorage.getItem("theme");

const themeSwitch = () => {
    const root = document.documentElement.classList;
    if (root.contains("dark")) {
        root.remove("dark");
        localStorage.setItem("theme", "light");
    } else {
        root.add("dark");
        localStorage.setItem("theme", "dark");
    }
}

export default themeSwitch;