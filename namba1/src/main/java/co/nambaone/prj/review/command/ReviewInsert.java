package co.nambaone.prj.review.command;

import java.sql.Date;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import co.nambaone.prj.common.Command;
import co.nambaone.prj.review.service.ReviewService;
import co.nambaone.prj.review.service.ReviewVO;
import co.nambaone.prj.review.serviceImpl.ReviewServiceImpl;

public class ReviewInsert implements Command {

	@Override
	public String exec(HttpServletRequest request, HttpServletResponse response) {
		// 리뷰입력
		ReviewService dao = new ReviewServiceImpl();
		ReviewVO vo = new ReviewVO();

//		vo.setReviewNum(Integer.valueOf(request.getParameter("reviewNum")));
		vo.setMovieCode(request.getParameter("MovieCode"));
		vo.setUserEmail(request.getParameter("userEmail"));
		vo.setUserNickname(request.getParameter("userNickname"));
		vo.setReviewDate(Date.valueOf(request.getParameter("reviewDate")));
		vo.setReivewContent(request.getParameter("reivewContent"));
		vo.setReviewScore(Integer.valueOf(request.getParameter("reviewScore")));

		dao.reviewInsert(vo);

		String json = null;
		ObjectMapper mapper = new ObjectMapper();
		try {
			json = mapper.writeValueAsString(vo);
		} catch (JsonProcessingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		// {"retCode": "OK"}
		return "Ajax:" + json;

	}

}
