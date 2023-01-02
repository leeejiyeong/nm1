package co.nambaone.prj.review.command;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.nambaone.prj.common.Command;
import co.nambaone.prj.review.service.ReviewService;
import co.nambaone.prj.review.service.ReviewVO;
import co.nambaone.prj.review.serviceImpl.ReviewServiceImpl;



public class ReviewDelete implements Command {

	@Override
	public String exec(HttpServletRequest request, HttpServletResponse response) {
		// 리뷰 삭제
		String reviewNum = request.getParameter("reviewNum");
		ReviewVO vo = new ReviewVO();
		vo.setReviewNum(Integer.parseInt(reviewNum));

		ReviewService service = new ReviewServiceImpl();
		int delCnt = service.reviewDelete(vo);
		String json;
		if (delCnt > 0) {
			// {"retCode":"Success","id":id}
			json = "{\"retCode\":\"Success\",\"id\":" + reviewNum + "}";
		} else {
			// {"reCode":"Fail"}
			json = "{\"reCode\":\"Fail\"}";
		}

		return "Ajax:" + json;
	}

}
