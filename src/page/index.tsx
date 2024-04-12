import AppRoutes from "../routes";
import { Container } from "./styled";

import videoUrl from "../video/Spaceman_Astronaut.mp4";
export default function Main() {
  return (
    <Container>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <AppRoutes />
    </Container>
  );
}
