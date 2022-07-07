const React = require("react")

exports.onRenderBody = ({ setPostBodyComponents  }) => {
    setHeadComponents([
        <script src={'slider.js'} type="text/javascript" crossOrigin="anonymous"/>,
      
    ]);
};
