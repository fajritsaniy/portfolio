// components/ProfilePicture.tsx
import React from "react";

interface ProfilePictureProps {
  src: string;
  alt: string;
  size?: number; // Optional size prop
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({
  src,
  alt,
  size = 100,
}) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "16px", // Adds space below the profile picture
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default ProfilePicture;
