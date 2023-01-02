package co.nambaone.prj.review.serviceImpl;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import co.nambaone.prj.common.DataSource;
import co.nambaone.prj.review.map.ReviewMapper;
import co.nambaone.prj.review.service.ReviewService;
import co.nambaone.prj.review.service.ReviewVO;

public class ReviewServiceImpl implements ReviewService {
	private SqlSession sqlSession = DataSource.getInstance().openSession(true);
	private ReviewMapper map = sqlSession.getMapper(ReviewMapper.class);

	@Override
	public List<ReviewVO> reviewSelectList() {
		// 영화 상세~ 리뷰~
		return map.reviewSelectList();
	}

	@Override
	public int reviewInsert(ReviewVO vo) {
		// TODO Auto-generated method stub
		return map.reviewInsert(vo);
	}

	@Override
	public int reviewUpdate(ReviewVO vo) {
		// TODO Auto-generated method stub
		return map.reviewUpdate(vo);
	}

	@Override
	public int reviewDelete(ReviewVO vo) {
		// TODO Auto-generated method stub
		return map.reviewDelete(vo);
	}

	@Override
	public ReviewVO reviewSelect(ReviewVO vo) {
		// TODO Auto-generated method stub
		return map.reviewSelect(vo);
	}

}
