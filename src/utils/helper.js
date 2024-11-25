import MyAccountContactMethod from "@/components/common/MyAccountContactMethod";
import MyAccountProfileSetting from "@/components/common/MyAccountProfileSetting";
import MyAccountSelectLanguage from "@/components/common/MyAccountSelectLanguage";

export  const TABS_DATA_LIST = [
        { id: 'profile', label: 'Profile 1', component: <MyAccountProfileSetting /> },
        { id: 'contact', label: 'Contact 2', component: <MyAccountContactMethod /> },
        { id: 'language', label: 'Language 3', component: <MyAccountSelectLanguage/> }
];
    
export const CONTACT_METHOD_DATA_LIST = [
      { id: 'email', label: 'Email' },
        { id: 'sms', label: 'SMS' },
        { id: 'both', label: 'Both' }
]