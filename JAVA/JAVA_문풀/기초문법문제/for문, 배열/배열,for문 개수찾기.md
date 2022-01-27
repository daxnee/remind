```java
    public static void main(String[] args) {
		   int count = 0;
		   int array[] = {101, 110, 120, 130, 88, 30};
		  //배열을 선언하고 100이 넘는 개수가 몇개인지 찾으시오.
		   int len = array.length;
		   for(int i=0; i<len; i++) {
			   if(array[i] >= 100) {
				   count++;
			   }
		   }			
		   System.out.println(count);
	}

결과 : 4
