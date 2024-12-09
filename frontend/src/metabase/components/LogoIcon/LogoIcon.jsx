import PropTypes from "prop-types";
import { Component } from "react";

import logoApast from "assets/img/LogoIcon/logo-apast.png";
import { PLUGIN_LOGO_ICON_COMPONENTS } from "metabase/plugins";

class DefaultLogoIcon extends Component {
  static defaultProps = {
    height: 32,
  };

  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    dark: PropTypes.bool,
    fill: PropTypes.string,
  };

  render() {
    const { height, width } = this.props;

    return (
      <img
        src={logoApast}
        alt="Custom Logo"
        width={width}
        height={height}
        style={{ objectFit: "contain" }}
      />
    );
  }
}

export default function LogoIcon(props) {
  const [Component = DefaultLogoIcon] = PLUGIN_LOGO_ICON_COMPONENTS;
  return <Component {...props} />;
}
