class StringUtils {
    static escapeHTML(str) {
        return str
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll("'", "&apos;")
            .replaceAll('"', "&quot;");
    }

    static unescapeHTML(str) {
        return str
            .replaceAll("&amp;", "&")
            .replaceAll("&lt;", "<")
            .replaceAll("&gt;", ">")
            .replaceAll("&apos;", "'")
            .replaceAll("&quot;", '"');
    }
}

module.exports = StringUtils;
