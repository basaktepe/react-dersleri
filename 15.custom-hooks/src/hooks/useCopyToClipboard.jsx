import React, { useState } from "react";

function useCopyToClipboard(text) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => setCopied(true))
      .catch(() => setCopied(false));
  };
  return [copied, copy];
}

export default useCopyToClipboard;
