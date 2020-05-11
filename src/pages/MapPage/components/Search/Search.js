import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  Input,
  InputLabel,
  MenuItem,
  FormControl,
  ListItemText,
  Select,
  Checkbox,
} from '@material-ui/core';
import { TypeRecycling } from '../../../../utils/constants';
import { cleanAndGetLocationFiltered } from '../../../../services/redux/actions/search.actions';
import { useTranslation } from 'react-i18next';
import './Search.scss';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 12 + ITEM_PADDING_TOP,
      width: 460,
    },
  },
};

const Search = ({ onLoadLocationFiltered, isOnSearching }) => {
  const { t } = useTranslation();
  const [material, setMaterial] = React.useState([]);
  const handleChange = (event) => {
    const params = event.target.value;
    setMaterial(params);
    if (params.length > 0) {
      onLoadLocationFiltered({ recycleBy: params });
    } else {
      onLoadLocationFiltered({ recycleBy: null });
    }
  };

  useEffect(() => {
    if (!isOnSearching) {
      setMaterial([]);
    }
  }, [isOnSearching]);

  return (
    <FormControl className="search">
      <InputLabel id="kindOfRecycle">{t('home.select')}</InputLabel>
      <Select
        labelId="kindOfRecycle"
        id="demo-mutiple-checkbox"
        multiple
        value={material}
        onChange={handleChange}
        input={<Input />}
        renderValue={(selected) => selected.join(', ')}
        MenuProps={MenuProps}
      >
        {TypeRecycling.map((type) => (
          <MenuItem key={type.value} value={type.value}>
            <Checkbox checked={material.indexOf(type.value) > -1} />
            <ListItemText primary={t(type.key)} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

const mapStateToProps = (state) => ({
  isOnSearching: state.searchs.isOnSearching,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadLocationFiltered: (params) => dispatch(cleanAndGetLocationFiltered(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
