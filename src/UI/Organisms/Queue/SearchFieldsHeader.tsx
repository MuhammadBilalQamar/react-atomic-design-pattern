import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// actions
import { getPricingAction } from '../../../store/actions';

import { LabelDatepicker, LabelSelect, LabelIconInput } from '../../Molecules';
import { Button } from '../../Atoms/atoms';
import Search from '../../../assets/search.png';

import { toastError, toastInfo } from '../../../utils/toast';
import { _compareDate } from '../../../utils/_date';
import { _searchInAOO } from '../../../utils/_searchInAOO';
interface props {
  setGridData: any;
  filtered: {
    data: Array<object>;
    setData: any;
  };
}
interface StateT {
  pricing: {
    data: Array<object>;
    load: boolean;
    error: Object;
  };
}

export default function SearchFieldsHeader({ setGridData, filtered }: props) {
  const dispatch = useDispatch();
  const { data } = useSelector((s: StateT) => s?.pricing);

  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setendDate] = React.useState(null);
  const [include, setInclude] = React.useState('');
  const [searchVal, setSearchVal] = React.useState('');
  const [workFlow, setWorkFlow] = React.useState('');

  const handleStartDate = (newValue?: any) => setStartDate(newValue);
  const handleEndDate = (newValue?: any) => setendDate(newValue);
  const handleInclude = (event?: any) => setInclude(event.target.value);

  const handleGetRequest = () => {
    if (!startDate) toastError('Start date is missing');
    else if (!endDate) toastError('End date is missing');
    else if (_compareDate(startDate, endDate))
      toastInfo('Start & end date should not be same');
    else if (!include) toastError('Include is missing');
    else dispatch(getPricingAction({ page: 1, limit: 15 }));
  };

  // Global search
  const handleSearch = (e: any) => {
    const val = e.target.value,
      filteredDATA = filtered.data;
    setSearchVal(val);
    if (filteredDATA && filteredDATA.length > 0) {
      setGridData(_searchInAOO(filteredDATA, val));
    }
  };

  const handleWorkFlow = (event?: any) => {
    const val = event.target.value;
    setWorkFlow(val);
    if (val !== 'none' && data && data.length > 0) {
      filtered.setData(_searchInAOO(data, val, 'WorkflowType'));
    } else filtered.setData(data);
  };

  return (
    <div>
      <div className='flex space-x-3 pt-4 px-4 pl-20'>
        <LabelDatepicker
          labelValue='Start Date:'
          labelClasses={{ root: 'text-sm font-light text-red-700' }}
          mainClass='flex items-center space-x-2'
          datePickerClasses={'border border-red-700 rounded-none h-12'}
          dateProps={{
            value: startDate,
            onChange: handleStartDate,
            maxDate: endDate ?? new Date()
          }}
        />
        <LabelDatepicker
          labelValue='End Date:'
          labelClasses={{ root: 'text-sm font-light text-red-700' }}
          mainClass='flex items-center space-x-2'
          datePickerClasses={'border border-red-700 rounded-none h-12'}
          dateProps={{
            value: endDate,
            onChange: handleEndDate,
            maxDate: new Date()
          }}
        />
        <LabelSelect
          labelValue='Include:'
          labelClasses={{ root: 'text-sm font-light text-red-700' }}
          mainClass='flex items-center space-x-2'
          selectProps={{
            variant: 'outlined',
            classes: { root: 'w-20 ', select: 'border-2 border-red-700' }
          }}
          options={[
            { name: 'Priced', value: 'priced' },
            { name: 'Unpriced', value: 'unpriced' }
          ]}
          inputProps={{
            classes: {
              underline: 'border border-red-700 rounded py-0.5 pl-2 text-sm'
            }
          }}
          selectState={{
            value: include,
            onChange: handleInclude
          }}
        />
        <Button
          value='Get Requests'
          classes={{ root: 'text-white text-xs rounded-full bg-red-700' }}
          onClick={handleGetRequest}
        />
      </div>

      <div className='flex space-x-3 pt-4 px-4'>
        <LabelIconInput
          mainClass='flex items-center space-x-2'
          labelValue='Search Text:'
          labelClasses={{
            root: 'text-sm font-light text-red-700'
          }}
          placeholder='Search Items'
          inputWrapperClass='border border-red-700 rounded px-1 flex items-center'
          inputclasses={{ root: 'text-sm py-1 w-64' }}
          imageSrc={Search}
          imageClasses='w-4'
          stateP={{ value: searchVal, onChange: handleSearch }}
        />
        <LabelSelect
          labelValue='Workflow:'
          labelClasses={{ root: 'text-sm font-light text-red-700' }}
          mainClass='flex items-center space-x-2'
          selectProps={{
            variant: 'outlined',
            classes: { root: 'w-56 ', select: 'border-2 border-red-700' }
          }}
          options={[
            { name: 'none', value: 'none' },
            { name: 'Manual pricing', value: 'manualpricing' },
            { name: 'Automated pricing', value: 'automatedpricing' },
            { name: 'Udm review', value: 'udmreview' },
            { name: 'Vpa review', value: 'vpareview' }
          ]}
          inputProps={{
            classes: {
              underline: 'border border-red-700 rounded py-0.5 pl-2 text-sm'
            }
          }}
          selectState={{
            value: workFlow,
            onChange: handleWorkFlow
          }}
        />
        {/* <LabelSelect
          labelValue='Show:'
          labelClasses={{ root: 'text-sm font-light text-red-700' }}
          mainClass='flex items-center space-x-2'
          placeholder='priced'
          selectProps={{
            variant: 'outlined',
            classes: { root: 'w-14 ', select: 'border-2 border-red-700' }
          }}
          inputProps={{
            classes: { underline: 'border border-red-700 rounded py-0.5  pl-2' }
          }}
        />
        <LabelSelect
          labelValue='Sort By:'
          labelClasses={{ root: 'text-sm font-light text-red-700' }}
          mainClass='flex items-center space-x-2'
          placeholder='priced'
          selectProps={{
            variant: 'outlined',
            classes: { root: 'w-20 ', select: 'border-2 border-red-700' }
          }}
          inputProps={{
            classes: { underline: 'border border-red-700 rounded py-0.5 pl-2' }
          }}
        /> */}
      </div>
    </div>
  );
}
