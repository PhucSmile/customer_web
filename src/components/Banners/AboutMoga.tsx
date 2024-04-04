import { Typography } from '@/components/MaterialTailwind';
import Image from 'next/image';

const AboutMoga = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="container mx-auto py-12 bg-white rounded-md px-4">
        <Typography variant="h3" className="pb-3 font-semibold text-primary">
          Giới thiệu
        </Typography>
        <section>
          <Typography variant="h5" className="font-medium text-primary">
            Khởi nguồn thương hiệu
          </Typography>
          <Typography variant="paragraph" className="py-2 text-lg">
            Hơn 20 năm hoạt động trong lĩnh vực xử lý môi trường, chúng tôi nhận
            thấy rằng, song song với việc thụ động xử lý, chúng tôi cần chủ động
            làm giảm tác hại đến môi trường.
          </Typography>
          <Typography variant="paragraph" className="py-2 text-lg">
            Từ đó, chúng tôi đặt ra sứ mệnh góp phần dẫn dắt xã hội cùng sản
            xuất và tận hưởng giá trị{' '}
            <span className="text-secondary text-sm">nông sản tử tế.</span>
          </Typography>
          <Image
            src="/logosecond.png"
            alt=""
            width={900}
            height={400}
            style={{ width: 'auto' }}
          />
        </section>
        <section>
          <Typography variant="h5" className="text-xl font-medium text-primary">
            Giá trị nông sản tử tế
          </Typography>
          <Typography variant="lead">An toàn</Typography>
          <ol>
            <li>
              <Typography variant="paragraph">
                An toàn cho người sử dụng.
              </Typography>
            </li>
            <li>
              <Typography variant="paragraph">
                An toàn cho người trồng và cộng đồng lân cận.
              </Typography>
            </li>
            <li>
              <Typography variant="paragraph">
                An toàn cho môi trường.
              </Typography>
            </li>
          </ol>
          <Typography
            variant="h5"
            className="pt-2 text-lg font-medium text-primary"
          >
            Sự kỹ lưỡng của các khâu sản xuất, chọn lọc và quản lý chất lượng
          </Typography>
          <Typography variant="paragraph" className="text-lg ">
            Canh tác nghiêm ngặt theo các tiêu chuẩn Organic, chọn lọc các sản
            phẩm tươi ngon và chất lượng.
          </Typography>
          <Typography
            variant="h5"
            className="pt-2 text-lg font-medium text-primary"
          >
            Vị ngon của các giống rau
          </Typography>
          <Typography variant="paragraph" className="text-lg ">
            Được chọn phù hợp điều kiện địa lý của vùng trồng và vùng trồng đặc
            sản cho vị rau đậm đà.
          </Typography>
          <Typography
            variant="h5"
            className="pt-2 text-lg font-medium text-primary"
          >
            Sự nỗ lực và cống hiến
          </Typography>
          <Typography variant="paragraph" className="text-lg ">
            Nông sản tử tế còn là sự nỗ lực cũng như thái độ phục vụ tận tình,
            chuyên nghiệp để trao đến tận tay khách hàng những sản phẩm tốt
            nhất..
          </Typography>
        </section>
      </div>
    </div>
  );
};

export default AboutMoga;
