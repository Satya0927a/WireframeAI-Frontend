async function Generate(imageData, UserPrompt,setEditorValue) {
  const formData = new FormData();
  formData.append("image", imageData)
  formData.append("UserPrompt", UserPrompt)
  const response = await fetch(
    "http://localhost:3000/generate",
    {
      method: "POST",
      body: formData
    }
  )
  const reader = response.body.getReader();
  const decoder = new TextDecoder()
  let generatedCode = "";
  while (true) {
    const { done, value } = await reader.read()
    if (done) { break; }
    const chunk = decoder.decode(value);
    generatedCode += chunk;
    setEditorValue(generatedCode)
  }
}

export {Generate}