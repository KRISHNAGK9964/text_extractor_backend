

export const uploadImageController = async(req,res) => {
    const { base64 , userId } = req.body;
    /**
     *  using tesseract.js service for extracting text from the base64 image
     *  preprocessing the image --> first convert image to gray scale so we can differentiate bold text with ocr threshhold
     *  ---> aganin using tesseract.js to extract only bold text from preprocessed image
     *  saving base64Image , userId , textcontent , boldtext into mongodb collection
     * */ 
    
}