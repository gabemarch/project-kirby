import './SearchBar.scss';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

const SearchBar = () => {
  return (
    <Stack spacing={2} sx={{ width: 300 }} className="searchbar">
      <Autocomplete
        className="searchbar-autocomplete"
        freeSolo
        id="free-solo"
        disableClearable
        options={[]}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
    </Stack>
  );
}

export default SearchBar;