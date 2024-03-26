import React, { useState } from "react";

/**
 * Đoạn mã trên định nghĩa một Higher Order Component (HOC) trong React được gọi là withLoader. 
 * HOC này có một chức năng làm cho Wrapped Component trở nên có khả năng hiển thị một thông báo "Loading..." 
 * trong khi dữ liệu đang được tải.
 * 
 *  Đầu tiên, HOC nhận một Wrapped Component làm đối số (WrappedComponent).
 *  HOC trả về một functional component mới nhận các props.
 *  Trong functional component này, một state isLoading được khởi tạo bằng useState với giá trị ban đầu là true, ngụ ý rằng dữ liệu đang được tải.
 *  Sau đó, sử dụng setTimeout, state isLoading được thiết lập lại thành false sau 2 giây (hoặc 2000 miligiây), giả lập việc dữ liệu đã được tải xong.
 * Cuối cùng, HOC trả về một phần tử div, trong đó kiểm tra giá trị của isLoading. Nếu isLoading là true, hiển thị một thông báo "Loading..."; nếu không, hiển thị Wrapped Component được truyền vào với các props tương ứng.
 */

const withLoader = (WrappedComponent) => {
    return (props) => {
        const [isLoading, setIsLoading] = useState(true);

        setTimeout(() => {
            setIsLoading(false);
        }, 2000)

        return (
            <div>
                {isLoading ? <p>Loading...</p> : <WrappedComponent {...props}/>}
            </div>
        )
    }
}

export default withLoader;