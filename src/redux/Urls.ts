const domain = process.env.BASE_URL || "http://localhost:5000";

const Urls = {
    domain,
    baseUrl: `${domain}/api`,
    files: `/files`,
};

export default Urls;
