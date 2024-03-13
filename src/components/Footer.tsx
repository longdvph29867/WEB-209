import facebook from "../assets/img/facebook.svg";
import twitter from "../assets/img/twitter.svg";
import youtube from "../assets/img/youtube.svg";
import telegram from "../assets/img/telegram.svg";
import imglogo from "../assets/img/logo140.svg";
import { Link } from "react-router-dom";
type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="relative py-16 lg:pt-24 lg:pb-20 border-t border-neutral-200">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-16">
          <div className="grid gap-3">
            <Link
              className=" pb-4 inline-block text-slate-600 flex-shrink-0"
              to="#"
            >
              <img alt="" className="block h-8 sm:h-10 w-auto" src={imglogo} />
            </Link>
            <Link
              to="#"
              className="flex items-center text-2xl text-neutral-700 hover:text-black space-x-2"
            >
              <div className="w-5 ">
                <img alt="" src={facebook} />
              </div>
              <span className="text-sm">Facebook</span>
            </Link>
            <Link
              to="#"
              className="flex items-center text-2xl text-neutral-700 hover:text-black space-x-2"
            >
              <div className="w-5 ">
                <img alt="" src={youtube} />
              </div>
              <span className="text-sm">Youtube</span>
            </Link>
            <Link
              to="#"
              className="flex items-center text-2xl text-neutral-700 hover:text-black space-x-2"
            >
              <div className="w-5 ">
                <img alt="" src={telegram} />
              </div>
              <span className="text-sm">Telegram</span>
            </Link>
            <Link
              to="#"
              className="flex items-center text-2xl text-neutral-700 hover:text-black space-x-2"
            >
              <div className="w-5 ">
                <img alt="" src={twitter} />
              </div>
              <span className="text-sm">Twitter</span>
            </Link>
          </div>
          <div className="text-sm">
            <h2 className="font-semibold text-neutral-700">Về Ciseco.</h2>
            <ul className="mt-5 space-y-4">
              <li>
                <Link
                  className="text-neutral-600 hover:text-black"
                  to="#"
                  target="_blank"
                >
                  Thông tin
                </Link>
              </li>
              <li>
                <Link
                  className="text-neutral-600 hover:text-black"
                  to="#"
                  target="_blank"
                >
                  Danh sách cửa hàng
                </Link>
              </li>
              <li>
                <Link
                  className="text-neutral-600 hover:text-black"
                  to="#"
                  target="_blank"
                >
                  Cơ Hội Nghề Nghiệp
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-sm">
            <h2 className="font-semibold text-neutral-700">Trợ giúp</h2>
            <ul className="mt-5 space-y-4">
              <li>
                <Link
                  className="text-neutral-600 hover:text-black"
                  to="#"
                  target="_blank"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  className="text-neutral-600 hover:text-black"
                  to="#"
                  target="_blank"
                >
                  Chính sách trả hàng
                </Link>
              </li>
              <li>
                <Link
                  className="text-neutral-600 hover:text-black"
                  to="#"
                  target="_blank"
                >
                  Chính sách bảo mật
                </Link>
              </li>
              <li>
                <Link
                  className="text-neutral-600 hover:text-black"
                  to="#"
                  target="_blank"
                >
                  Tiếp cận
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-sm">
            <h2 className="font-semibold text-neutral-700">Tài khoản</h2>
            <ul className="mt-5 space-y-4">
              <li>
                <Link
                  className="text-neutral-600 hover:text-black"
                  to="#"
                  target="_blank"
                >
                  Hồ sơ
                </Link>
              </li>
              <li>
                <Link
                  className="text-neutral-600 hover:text-black"
                  to="#"
                  target="_blank"
                >
                  Tư cách thành viên
                </Link>
              </li>
              <li>
                <Link
                  className="text-neutral-600 hover:text-black"
                  to="#"
                  target="_blank"
                >
                  Phiếu giảm giá
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
