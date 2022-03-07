import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { PricingQueueTemplate } from '../../Templates';
import {
  SearchFieldsHeader,
  DataGrid,
  FooterButtons,
  DetailModal,
  PricingMessageModal,
  PriceTypeModal,
  AssignModal,
  ReAssignModal,
  UnAssignModal
} from '../../Organisms';

import { headCells } from '../../../Constant/pricingQueue';
import { _searchInAOO } from '../../../utils/_searchInAOO';

interface StateT {
  pricing: {
    data: Array<object>;
    load: boolean;
    error: object;
  };
}

export default function PricingQueue() {
  const { data, load, error } = useSelector((s: StateT) => s?.pricing);

  const [detailModal, setDetailModal] = useState<any>({
    open: false,
    modalData: {}
  });
  const [messageOpen, setMessageOpen] = useState(false);
  const [pricingTypeOpen, setPricingTypeOpen] = useState(false);
  const [assignOpen, setAssignOpen] = useState(false);
  const [reAssignOpen, setReAssignOpen] = useState(false);
  const [unAssignOpen, setUnAssignOpen] = useState(false);
  const [headFields, setHeadFields] = useState<any>({});

  // grid
  const [gridData, setGridData] = useState<Array<object>>([]);
  const [FilteredData, setFilteredData] = useState<Array<object>>([]);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  useEffect(() => {
    setGridData(FilteredData);
  }, [FilteredData]);

  const handleDetailModal = (row: object) => {
    if (Object.keys(row).length > 0) {
      setDetailModal({ open: true, modalData: row });
    }
  };

  // const refs = React.useMemo(() =>  headCells.forEach((item: any) => ), [])

  useEffect(() => {
    let obj = {};
    headCells.forEach((item: any) => {
      if (item?.search) {
        obj = { ...obj, [item.label]: '' };
      }
    });
    setHeadFields(obj);
  }, []);

  const handleSearch = (e: any, key: any, searchIn: any) => {
    const val = e.target.value;
    setHeadFields((s: any) => ({ ...s, [key]: val }));

    let res = _searchInAOO(FilteredData, val, searchIn);

    setGridData(res);
  };

  return (
    <PricingQueueTemplate>
      <SearchFieldsHeader
        setGridData={setGridData}
        filtered={{ data: FilteredData, setData: setFilteredData }}
      />
      <DataGrid
        rows={gridData}
        headerFieldData={{
          fields: headFields,
          handleSearch: handleSearch
        }}
        handleDetailModal={handleDetailModal}
        messageRequest={() => setMessageOpen(true)}
        pricingType={() => setPricingTypeOpen(true)}
      />
      <PriceTypeModal
        isOpen={pricingTypeOpen}
        handleClose={() => setPricingTypeOpen(false)}
      />
      <PricingMessageModal
        isOpen={messageOpen}
        handleClose={() => setMessageOpen(false)}
      />
      <DetailModal
        isOpen={detailModal.open}
        handleClose={() =>
          setDetailModal({
            open: false,
            modalData: {}
          })
        }
        row={detailModal.modalData}
      />
      <AssignModal
        isOpen={assignOpen}
        handleClose={() => setAssignOpen(false)}
        handleReAssign={() => {
          setReAssignOpen(true);
          setAssignOpen(false);
        }}
      />
      <ReAssignModal
        isOpen={reAssignOpen}
        handleClose={() => setReAssignOpen(false)}
      />
      <UnAssignModal
        isOpen={unAssignOpen}
        handleClose={() => setUnAssignOpen(false)}
      />
      <FooterButtons
        handleAssign={() => setAssignOpen(true)}
        handleUnAssign={() => setUnAssignOpen(true)}
      />
    </PricingQueueTemplate>
  );
}
