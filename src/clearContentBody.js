const clearContentBody = () => {
    const contentBody = document.getElementById("content-body")
    const contentDiv = contentBody.lastElementChild
    if (contentDiv === null) {
        return;
    }
    else {
        contentBody.removeChild(contentDiv);
    };
    
}

export {clearContentBody}