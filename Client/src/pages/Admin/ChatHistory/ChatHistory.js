import React, { useEffect, useState } from "react";
import { ChatHistoryWrapper } from "./ChatHistory.styles";
import { Input } from "antd";
import Icon from "@ant-design/icons";
import { ReactComponent as SearchSvg } from "../../../assets/images/search.svg";
import TableWrapper from "./TableWrapper";
import axios from "axios";
import { base_url } from "../../../constant";
import { debounce } from "lodash";

const ChatHistory = () => {
  const [inputValue, setInputValue] = useState("");

  const [searchData, setSearchData] = useState([]);

  const handlechangeInput = debounce(async(e) => {
    setInputValue(e.target.value);

        if (e.target.value?.length > 0) {
          await axios
            .get(`${base_url}/admin/search?prompt=${e.target.value}`)
            .then((res) => setSearchData(res?.data?.data));
        }

  }, 1000);

  return (
    <ChatHistoryWrapper>
      <div className="input-field">
        <Input
        //   value={inputValue}
          onChange={handlechangeInput}
          addonBefore={<Icon component={SearchSvg} />}
          defaultValue=""
          placeholder="Search"
        />
      </div>
      <div className="table-wrapper">
        <div className="large-body">Chat History</div>
        <TableWrapper searchData={searchData} inputValue={inputValue} />
      </div>
    </ChatHistoryWrapper>
  );
};

export default ChatHistory;
