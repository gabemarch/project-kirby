import { ShortBoxedAPIProvider } from "../../shared/context/shortBoxedContext";


const NewReleases = () => {
  return (
    <ShortBoxedAPIProvider>
      <div className="new-releases">
        <h1 className="new-releases-heading">New Releases</h1>
      </div>
    </ShortBoxedAPIProvider>
  )
}

export default NewReleases;
