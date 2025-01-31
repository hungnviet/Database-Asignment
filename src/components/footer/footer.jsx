import "./footer.css";
import Image from "next/image";
export default function Footer() {
  return (
    <div>
      <div className="footer_container">
        <div className="left_section_footer">
          <h3>Send us feedback here</h3>
          <textarea placeholder="Your message" rows="6" cols="30"></textarea>
          <button>Send</button>
        </div>
        <div className="right_section_footer">
          <h3>Contact us</h3>
          <div className="in4_footer">
            <div>
              <Image src="/location_footer.png" height={30} width={30} />
              <p> Đại học Bách Khoa Thành Phố Hồ Chí Minh </p>
            </div>
            <div>
              <Image src="/mail_footer.png" height={30} width={30} />
              <p>group4CC02@gmail.com</p>
            </div>
            <div>
              <Image src="/phone_footer.png" height={30} width={30} />
              <p>0123456789</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_right_2nd">
        <p>@GROUP4-CC02-DB-ASSIGNMENT</p>
      </div>
    </div>
  );
}
