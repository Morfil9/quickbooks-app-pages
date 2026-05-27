module.exports = (req, res) => {
    const params = new URLSearchParams(req.query).toString()
    res.redirect(302, `http://localhost:8765/callback?${params}`)
}
