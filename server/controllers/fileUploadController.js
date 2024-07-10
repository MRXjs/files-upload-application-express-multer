const pluginUploadRespHandler = (req, res, next) => {
    try {
        res.status(201).json({
            success: true,
            message: 'file upload successful.'
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error
        });
    }
};

module.exports = {
    pluginUploadRespHandler
};