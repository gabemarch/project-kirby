import './HomeHeader.scss';

export const HomeHeader = () =>{
  return (
    <div className="home-header">
      <h1 className="home-header-title">ComicVerse</h1>
      <div className="home-header-description">
        <p className="home-header-description-text">
          Find your favorite comic books and graphic novels, review or share
          them and enjoy being part of the greatest community!
        </p>
      </div>
    </div>
  )
}

export default HomeHeader;