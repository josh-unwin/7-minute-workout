import React from 'react'
import styled from 'styled-components'

const SafariWarningDiv = styled.div`
	opacity: 0;
	animation-name: fadeInOpacity;
	animation-iteration-count: 1;
	animation-timing-function: ease-in;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;

  @keyframes fadeInOpacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  };
`

const SafariWarning = () => {
  function handleClick() {
    document.querySelector('#safari-warning').style.display = "none";
  }

  return (
    <SafariWarningDiv id="safari-warning" className="text-xs lg:text-sm bg-red-100 text-red-700 px-4 py-3 rounded relative mt-4 lg:mx-48 lg:my-3" role="alert">
      <strong className="font-bold">Sorry!</strong>
      <span className="block sm:inline font-normal"> Apple prevents automatic audio playback in Safari and iOS, you won't get any timer audio feedback.</span>
      <span onClick={handleClick} className="absolute top-0 bottom-0 right-0 p-2 lg:px-4 lg:py-4">
        <svg className="fill-current h-4 w-4 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
      </span>
    </SafariWarningDiv>
  )
}

export default SafariWarning