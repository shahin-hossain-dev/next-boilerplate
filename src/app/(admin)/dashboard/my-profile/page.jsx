import React from "react";
import Section from "../components/ui/Section";
import ProfileBanner from "./_components/ProfileBanner";
import Card from "../components/ui/Card";
import { FaRegUser } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import Icon from "../components/ui/Icon";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineMail } from "react-icons/md";
const ProfileItem = ({ property, value, icon }) => {
  return (
    <div className="flex gap-2 items-center">
      <span className="flex gap-2 items-center">
        <Icon icon={icon} />
        <span>{property} : </span>
      </span>
      <span>{value}</span>
    </div>
  );
};

const MyProfilePage = () => {
  return (
    <Section>
      <ProfileBanner />

      {/* <Card className="!mt-4"> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 !mt-4">
        {/* grid 1 */}
        <Card>
          <div className="lg:text-base space-y-2">
            <h4 className="text-lg font-thin text-neutral-500">About</h4>

            <ProfileItem
              icon={FaRegUser}
              property={"Full Name"}
              value={"Abdullah Al Jawad"}
            />
            <ProfileItem icon={FaCheck} property={"Status"} value={"Active"} />
          </div>
        </Card>
        {/* grid -2 */}
        <Card>
          <div className="lg:text-base space-y-2">
            <h4 className="text-lg font-thin text-neutral-500">Contacts</h4>

            <ProfileItem
              icon={BiPhoneCall}
              property={"Contact No."}
              value={"+8801676446077"}
            />
            <ProfileItem
              icon={MdOutlineMail}
              property={"Email"}
              value={"akbarprice@gmail.com"}
            />
          </div>
        </Card>
        {/* grid-3 */}
        <Card>
          <div className="lg:text-base space-y-2">
            <h4 className="text-lg font-thin text-neutral-500">Overview</h4>

            <ProfileItem
              icon={FaRegUser}
              property={"Full Name"}
              value={"Abdullah Al Jawad"}
            />
            <ProfileItem icon={FaCheck} property={"Status"} value={"Active"} />
          </div>
        </Card>
      </div>
      {/* </Card> */}
    </Section>
  );
};

export default MyProfilePage;
