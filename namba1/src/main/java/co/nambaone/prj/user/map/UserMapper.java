package co.nambaone.prj.user.map;

import java.util.List;
import java.util.Map;

import co.nambaone.prj.user.service.UserVO;

public interface UserMapper {
	List<UserVO> userSelectList(); // 회원 전체조회
	UserVO userSelect(UserVO vo); // 회원 유무조회
	int userInsert(UserVO vo); //입력
	int userDelete(UserVO vo); //삭제
	int userUpdate(UserVO vo); //수정
	
	boolean isIdCheck(String id); // 아이디 중복체크 존재하면 false

	//회원 수 차트(라인차트)
	List<Map<String, Integer>> chartLine();
}
