function hello(name) {
    if (!name || name.trim() === "") {
        return "Hello, World!";
    }
    const formattedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    return `Hello, ${formattedName}!`;
}