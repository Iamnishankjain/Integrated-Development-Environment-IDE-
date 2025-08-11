const languageCodeMap = {
  cpp: 54,
  java: 62,
  javascript: 63,
  python: 71
};

export async function getSubmission(tokenId, callback) {

  const url = `https://judge0-ce.p.rapidapi.com/submissions/${tokenId}?base64_encoded=true&wait=false&fields=*`;
  const options = {
    method: 'GET',
    headers: {
      'Content-type': 'application/octet-stream',
      'x-rapidapi-key': '993903789cmsh3c64194f8b2b0b8p18ee63jsn3af8a972aa60',
      'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
    },
  }
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  }
  catch (err) {
    callback({ apiStatus: 'error', message: JSON.stringify(err) })
  }
}

export async function makeSubmission(code, language, callback, stdin) {

  const url = "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&wait=false&fields=*";
  const httpOptions = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'x-rapidapi-key': '993903789cmsh3c64194f8b2b0b8p18ee63jsn3af8a972aa60',
      'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
    },
    body: JSON.stringify({
      language_id: languageCodeMap[language],
      source_code: btoa(code),
      stdin: btoa(stdin || "")
    })
  }
  try {
    callback({ apiStatus: 'loading' })
    const response = await fetch(url, httpOptions);
    const result = await response.json();
    const tokenId = result.token;
    let statusCode = 1;
    let apiSubmissionResult;
    while (statusCode === 1 || statusCode === 2) {
      await new Promise(r => setTimeout(r, 1000)); // prevent tight loop
      try {
        apiSubmissionResult = await getSubmission(tokenId, callback);
        statusCode = apiSubmissionResult.status.id;
      } catch (err) {
        callback({
          apiStatus: 'error',
          message: JSON.stringify(err)
        })
        return;
      }
    }
    if (apiSubmissionResult) {
      callback({ apiStatus: "success", data: apiSubmissionResult });
    }

  }
  catch (err) {
    callback({
      apiStatus: 'error',
      message: JSON.stringify(err)
    });
  }
}
