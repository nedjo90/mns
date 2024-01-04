public class Student {
    private String lastName;
    private String firstName;
    private Mark[] marks = new Mark[4];


    public Student(String lastName, String firstName) {
        this.lastName = lastName;
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public Mark[] getMarks() {
        return marks;
    }

    public void setMarks(Mark[] marks) {
        int i = 0;
        int j = 0;

        while (i < 4 && this.marks[i] != null)
        {
            i++;
        }
        while (i < 4 && j < marks.length)
        {
            this.marks[i] = marks[j]; //note
            this.marks[i] = marks[j]; //coefficient
            j++;
            i++;
        }
    }

    public float mean() {
        float ret = 0;
        int coef = 0;
        int i = 0;
        while (i < 4 && this.marks[i] != null) {
            ret += this.marks[i];

            i++;
        }
        ret /= i;
        return ret;
    }
}
