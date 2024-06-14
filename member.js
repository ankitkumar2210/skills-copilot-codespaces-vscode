function skillsMember() {
    return {
        skills: ['JavaScript', 'React', 'Node'],
        addSkill: function (newSkill) {
            this.skills.push(newSkill);
        }
    };
}