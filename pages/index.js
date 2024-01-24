import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getMembers } from '../api/memberData';
import { useAuth } from '../utils/context/authContext';
import MemberCard from '../components/MemberCard';

export default function Home() {
  // TODO: Set a state for members
  const [members, setMembers] = useState([]);

  // Get user ID using useAuth hook
  const { user } = useAuth();

  // TODO: Create a function that makes the API call to get all members
  const getAllTheMembers = () => {
    getMembers(user.uid).then(setMembers);
  };

  // TODO: Make the call to the API to get all the members on component render
  useEffect(() => {
    getAllTheMembers();
  }, []);

  return (
    <div className="text-center my-4">
      <Link href="/new" passHref>
        <Button>Add A Member</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {/* TODO: map over books here using BookCard component */}
        {members.map((member) => (
          <MemberCard key={member.firebaseKey} memberObj={member} onUpdate={getAllTheMembers} />
        ))}
      </div>

    </div>
  );
}
