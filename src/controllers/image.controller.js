import Tesseract from "tesseract.js";
import Image from "../models/image.js";

export const uploadImageController = async (req, res) => {
  try {
    /**
     *  using tesseract.js service for extracting text from the base64 image
     *  preprocessing the image --> first convert image to gray scale so we can differentiate bold text with ocr threshhold
     *  ---> aganin using tesseract.js to extract only bold text from preprocessed image
     *  saving base64Image , userId , textcontent , boldtext into mongodb collection
     * */
    // console.log(req.body);
    const { base64 } = req.body;
    const result = await Tesseract.recognize(base64, "eng");
    console.log(result?.data?.text);
    const newImageDoc = await Image.create({
      base64Image: base64,
      textContent: result.data.text,
      boldWords: "jsu",
    });
    console.log(newImageDoc);
    return res.status(200).json({ message: "getting your image", text : result.data.text , newImageDoc});
  } catch (error) {
    return res.status(500).json({ 'message' : `Unexpected error occured: \n${error}`})
  }
};
