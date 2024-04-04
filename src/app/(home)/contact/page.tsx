import Image from 'next/image';

const Contact = () => {
  return (
    <>
      <div className="container mx-auto py-12">
        <h1 className="pb-3 text-3xl font-semibold text-primary">Liên hệ</h1>
        <section>
          <h3 className="text-xl font-medium text-primary">
            Khởi nguồn thương hiệu
          </h3>
          <p className="py-2 text-lg">
            Hơn 20 năm hoạt động trong lĩnh vực xử lý môi trường, chúng tôi nhận
            thấy rằng, song song với việc thụ động xử lý, chúng tôi cần chủ động
            làm giảm tác hại đến môi trường.
          </p>
          <p className="py-2 text-lg">
            Từ đó, chúng tôi đặt ra sứ mệnh góp phần dẫn dắt xã hội cùng sản
            xuất và tận hưởng giá trị{' '}
            <span className="text-secondary">nông sản tử tế.</span>
          </p>
          <Image
            src="/logosecond.png"
            alt=""
            width={900}
            height={400}
            style={{ width: 'auto' }}
          />
        </section>
        <section>
          <h3 className="text-xl font-medium text-primary">
            Giá trị nông sản tử tế
          </h3>
          <h4>An toàn</h4>
          <ol>
            <li>An toàn cho người sử dụng.</li>
            <li>An toàn cho người trồng và cộng đồng lân cận.</li>
            <li>An toàn cho môi trường.</li>
          </ol>
          <h4 className="pt-2 text-lg font-medium text-primary">
            Sự kỹ lưỡng của các khâu sản xuất, chọn lọc và quản lý chất lượng
          </h4>
          <p className="text-lg ">
            Canh tác nghiêm ngặt theo các tiêu chuẩn Organic, chọn lọc các sản
            phẩm tươi ngon và chất lượng.
          </p>
          <h4 className="pt-2 text-lg font-medium text-primary">
            Vị ngon của các giống rau
          </h4>
          <p className="text-lg ">
            Được chọn phù hợp điều kiện địa lý của vùng trồng và vùng trồng đặc
            sản cho vị rau đậm đà.
          </p>
          <h4 className="pt-2 text-lg font-medium text-primary">
            Sự nỗ lực và cống hiến
          </h4>
          <p className="text-lg ">
            Nông sản tử tế còn là sự nỗ lực cũng như thái độ phục vụ tận tình,
            chuyên nghiệp để trao đến tận tay khách hàng những sản phẩm tốt
            nhất..
          </p>
        </section>
      </div>
    </>
  );
};

export default Contact;
