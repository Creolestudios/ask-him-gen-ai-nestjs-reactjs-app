import React, { useEffect, useMemo, useState } from "react";
import Pagination from "../../../components/Pagination/Pagination";
import { Table } from "antd";
import axios from "axios";
import { base_url } from "../../../constant";
import Loader from "../../../components/Loader/Loader";

const TableWrapper = ({searchData, inputValue}) => {
  const [userchatdata, setUserChatData] = useState([]);
  const [loader, setLoader] = useState(false);

  const getChatApi = async () => {
    if(inputValue !== ''){
      setUserChatData(searchData);
    } else{
      try {
        setLoader(true);
        const response = await axios.get(`${base_url}/admin/chat`);
        setUserChatData([...response?.data]);
      } catch (error) {
        console.error("Error fetching chat data:", error);
      } finally {
        setLoader(false);
      }
    }
  };

  useEffect(() => {
    getChatApi();
  }, []);

  console.log("userchatdata", userchatdata
  ?.map((e) => e?.dataEntries)
  .map((el) => el?.map((es) => es))
  .flat(), searchData);

  // const data = [
  //     {
  //       key: '1',
  //       id: '1.',
  //       prompt: 'What is the essence of your teachings?',
  //       response: 'Lorem ipsum dolor sit amet consectetur. Varius rutrum sit sed arcu morbi facilisis aliquam eu. Eget consequat egesta  et nulla. Tincidunt augue neque pulvinar urna aliquam volutpat. Sit pharetra non et ultrices quis. Justo ac in habitant cras. Et semper turpis vulputate sagittis id id nunc. Vitae eros molestie ut et in. Enim viverra vitae pulvinar euismod a  Eget rutrum sollicitudin metus diam leo nisi rutrum nec. Lorem ipsum dolor sit amet consectetur. Varius rutrum sit sed arcu morbi facilisis aliquam eu. Eget consequat egesta  et nulla. Tincidunt augue neque pulvinar urna aliquam volutpat. Sit pharetra non et ultrices quis. Justo ac in habitant cras. Et semper turpis vulputate sagittis id id nunc.',
  //     },
  //     {
  //       key: '2',
  //       id: '2.',
  //       prompt: 'What is the essence of your teachings?',
  //       response: 'Lorem ipsum dolor sit amet consectetur. Varius rutrum sit sed arcu morbi facilisis aliquam eu. Eget consequat egesta  et nulla. Tincidunt augue neque pulvinar urna aliquam volutpat. Sit pharetra non et ultrices quis. Justo ac in habitant cras. Et semper turpis vulputate sagittis id id nunc. Vitae eros molestie ut et in. Enim viverra vitae pulvinar euismod a  Eget rutrum sollicitudin metus diam leo nisi rutrum nec.',
  //     },
  //     {
  //         key: '3',
  //         id: '3.',
  //         prompt: 'What is the essence of your teachings?',
  //         response: 'Lorem ipsum dolor sit amet consectetur. Varius rutrum sit sed arcu morbi facilisis aliquam eu. Eget consequat egesta  et nulla. Tincidunt augue neque pulvinar urna aliquam volutpat. Sit pharetra non et ultrices quis. Justo ac in habitant cras. Et semper turpis vulputate sagittis id id nunc. Vitae eros molestie ut et in. Enim viverra vitae pulvinar euismod a  Eget rutrum sollicitudin metus diam leo nisi rutrum nec.',
  //       },
  //       {
  //         key: '4',
  //         id: '4.',
  //         prompt: 'What is the essence of your teachings?',
  //         response: 'Lorem ipsum dolor sit amet consectetur. Varius rutrum sit sed arcu morbi facilisis aliquam eu. Eget consequat egesta  et nulla. Tincidunt augue neque pulvinar urna aliquam volutpat. Sit pharetra non et ultrices quis. Justo ac in habitant cras. Et semper turpis vulputate sagittis id id nunc. Vitae eros molestie ut et in. Enim viverra vitae pulvinar euismod a  Eget rutrum sollicitudin metus diam leo nisi rutrum nec.',
  //       },
  //       {
  //         key: '5',
  //         id: '5.',
  //         prompt: 'What is the essence of your teachings?',
  //         response: 'Lorem ipsum dolor sit amet consectetur. Varius rutrum sit sed arcu morbi facilisis aliquam eu. Eget consequat egesta  et nulla. Tincidunt augue neque pulvinar urna aliquam volutpat. Sit pharetra non et ultrices quis. Justo ac in habitant cras. Et semper turpis vulputate sagittis id id nunc. Vitae eros molestie ut et in. Enim viverra vitae pulvinar euismod a  Eget rutrum sollicitudin metus diam leo nisi rutrum nec.',
  //       },
  //       {
  //         key: '6',
  //         id: '6.',
  //         prompt: 'What is the essence of your teachings?',
  //         response: 'Lorem ipsum dolor sit amet consectetur. Varius rutrum sit sed arcu morbi facilisis aliquam eu. Eget consequat egesta  et nulla. Tincidunt augue neque pulvinar urna aliquam volutpat. Sit pharetra non et ultrices quis. Justo ac in habitant cras. Et semper turpis vulputate sagittis id id nunc. Vitae eros molestie ut et in. Enim viverra vitae pulvinar euismod a  Eget rutrum sollicitudin metus diam leo nisi rutrum nec.',
  //       },
  //       {
  //         key: '7',
  //         id: '7.',
  //         prompt: 'What is the essence of your teachings?',
  //         response: 'Lorem ipsum dolor sit amet consectetur. Varius rutrum sit sed arcu morbi facilisis aliquam eu. Eget consequat egesta  et nulla. Tincidunt augue neque pulvinar urna aliquam volutpat. Sit pharetra non et ultrices quis. Justo ac in habitant cras. Et semper turpis vulputate sagittis id id nunc. Vitae eros molestie ut et in. Enim viverra vitae pulvinar euismod a  Eget rutrum sollicitudin metus diam leo nisi rutrum nec.',
  //       },
  //       {
  //         key: '8',
  //         id: '8.',
  //         prompt: 'What is the essence of your teachings?',
  //         response: 'Lorem ipsum dolor sit amet consectetur. Varius rutrum sit sed arcu morbi facilisis aliquam eu. Eget consequat egesta  et nulla. Tincidunt augue neque pulvinar urna aliquam volutpat. Sit pharetra non et ultrices quis. Justo ac in habitant cras. Et semper turpis vulputate sagittis id id nunc. Vitae eros molestie ut et in. Enim viverra vitae pulvinar euismod a  Eget rutrum sollicitudin metus diam leo nisi rutrum nec.',
  //       },
  //       {
  //         key: '9',
  //         id: '9.',
  //         prompt: 'What is the essence of your teachings?',
  //         response: 'Lorem ipsum dolor sit amet consectetur. Varius rutrum sit sed arcu morbi facilisis aliquam eu. Eget consequat egesta  et nulla. Tincidunt augue neque pulvinar urna aliquam volutpat. Sit pharetra non et ultrices quis. Justo ac in habitant cras. Et semper turpis vulputate sagittis id id nunc. Vitae eros molestie ut et in. Enim viverra vitae pulvinar euismod a  Eget rutrum sollicitudin metus diam leo nisi rutrum nec.',
  //       },
  //       {
  //         key: '10',
  //         id: '10.',
  //         prompt: 'What is the essence of your teachings?',
  //         response: 'Lorem ipsum dolor sit amet consectetur. Varius rutrum sit sed arcu morbi facilisis aliquam eu. Eget consequat egesta  et nulla. Tincidunt augue neque pulvinar urna aliquam volutpat. Sit pharetra non et ultrices quis. Justo ac in habitant cras. Et semper turpis vulputate sagittis id id nunc. Vitae eros molestie ut et in. Enim viverra vitae pulvinar euismod a  Eget rutrum sollicitudin metus diam leo nisi rutrum nec.',
  //       },
  //       {
  //         key: '11',
  //         id: '11.',
  //         prompt: 'What is the essence of your teachings?',
  //         response: 'Lorem ipsum dolor sit amet consectetur. Varius rutrum sit sed arcu morbi facilisis aliquam eu. Eget consequat egesta  et nulla. Tincidunt augue neque pulvinar urna aliquam volutpat. Sit pharetra non et ultrices quis. Justo ac in habitant cras. Et semper turpis vulputate sagittis id id nunc. Vitae eros molestie ut et in. Enim viverra vitae pulvinar euismod a  Eget rutrum sollicitudin metus diam leo nisi rutrum nec.',
  //       },
  //   ];

  let PageSize = 10;

  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    const userData = inputValue.length > 0 ? searchData : userchatdata
      ?.map((e) => e?.dataEntries)
      .map((el) => el?.map((es) => es))
      .flat() ;

    // Add a sequential "id" property to each record
    const recordsWithSequentialId = userData?.map((record, index) => ({
      ...record,
      id: index + 1, // Generate a sequential id starting from 1
    }));

    return recordsWithSequentialId?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, userchatdata, inputValue, searchData]);

  const [collapse, setCollapse] = useState(null);

  let maxLength = 250;

  const truncateText = (text, id) => {
    if (id === collapse || text.length <= maxLength) {
      return text;
    } else {
      return text.slice(0, maxLength) + " ...";
    }
  };

  const handleRowPera = (text, record) => {
    if (collapse !== record?.id) {
      setCollapse(record?.id);
    } else {
      setCollapse("");
    }
  };

  const columns = [
    {
      title: "No.",
      dataIndex: "id",
      className: "number",
      key: "number",
      render: (_, record) => <div>{record?.id + "."}</div>,
      width: "6%",
    },
    {
      title: "Question",
      dataIndex: "prompt",
      className: "question",
      key: "question",
      width: "30%",
    },
    {
      title: "Answer",
      dataIndex: "response",
      key: "answer",
      render: (_, record) => (
        <div
          style={{ display: "flex", justifyContent: "space-between" }}
          onClick={() => handleRowPera(record?.response, record)}
        >
          <div className={`text  ${record?.id === collapse ? "active" : ""}`}><pre>{truncateText(record?.response, record?.id)}</pre></div>
          {record?.response.length >= maxLength && (
            <div
              className={`arrow-icon ${
                record?.id === collapse ? "active" : ""
              }`}
            ></div>
          )}
        </div>
      ),
    },
  ];

  return (
    <>
      <div>
        {loader ? (
          <Loader />
        ) : (
          <Table
            sticky
            dataSource={currentTableData}
            columns={columns}
            pagination={false}
            scroll={{ x: 950 }}
          />
        )}
      </div>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={
         inputValue?.length > 0 ? searchData?.length : userchatdata
            .map((e) => e.dataEntries)
            .map((el) => el.map((es) => es))
            .flat()?.length
        }
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
};

export default TableWrapper;
