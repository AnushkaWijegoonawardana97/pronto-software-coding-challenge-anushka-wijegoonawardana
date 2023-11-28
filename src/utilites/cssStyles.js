// @mui
import { alpha } from "@mui/material/styles";

/**
 * Generates a background blur CSS style based on the provided properties.
 *
 * @param {Object} props - The properties for configuring the background blur.
 * @returns {Object} - CSS styles for background blur.
 */
export function bgBlur(props) {
  // Extracting color, blur, opacity, and imgUrl from props with default values
  const color = props?.color || "#000000";
  const blur = props?.blur || 6;
  const opacity = props?.opacity || 0.8;
  const imgUrl = props?.imgUrl;

  // Check if imgUrl is provided for background image
  if (imgUrl) {
    return {
      position: "relative",
      backgroundImage: `url(${imgUrl})`,
      "&:before": {
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 9,
        content: '""',
        width: "100%",
        height: "100%",
        // Apply backdrop filter with blur and alpha background color
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,
        backgroundColor: alpha(color, opacity),
      },
    };
  }

  // Return styles without background image
  return {
    backdropFilter: `blur(${blur}px)`,
    WebkitBackdropFilter: `blur(${blur}px)`,
    backgroundColor: alpha(color, opacity),
  };
}
