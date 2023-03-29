import React from "react";
import { Link } from "react-router-dom";

const PerformerProfileAlbumList = ({ albums }) => {
  return (
    <div className="album-list">
      <h2>Albums</h2>
      <div className="album-grid">
        {albums.map((album) => (
          <div key={album.id} className="album-card">
            <Link to={`/performer/album/${album.id}`}>
              <div className="album-preview">
                {album.images.slice(0, 3).map((image) => (
                  <img key={image.id} src={image.src} alt={album.name} />
                ))}
                <div className="album-preview-overlay">
                  <p>{album.images.length} Photos</p>
                </div>
              </div>
              <h3>{album.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerformerProfileAlbumList;
